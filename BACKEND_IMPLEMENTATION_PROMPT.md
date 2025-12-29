# Backend Implementation Prompt for LagosDriversLink

## Overview
This document outlines the backend implementation requirements to support the new features added to the frontend. The frontend has been updated to support:
1. Service requests for other professionals (house cleaners, chefs, nannies, teachers, tailors, plumbers, engineers, etc.)
2. Admin email notifications for user registrations
3. Admin email notifications for service requests

## Current Frontend Implementation Status

### ✅ Completed on Frontend:
1. **Service Request Form** (`/service-request`)
   - Form collects: fullName, email, phone, location, serviceType, additionalNotes
   - Submits to `/api/service-request` endpoint
   - Sends confirmation email to user
   - Sends notification email to admin (teams@lagosdriverslink.com)

2. **User Registration Email Notifications**
   - Updated `/api/register` to send admin notification email when users register
   - Email includes: name, email, date of birth

3. **Email Templates Created:**
   - `ServiceRequestEmail.tsx` - Admin notification for service requests
   - `ServiceRequestConfirmationEmail.tsx` - User confirmation for service requests
   - `UserRegistrationEmail.tsx` - Admin notification for new user registrations

## Backend Requirements

### 1. Sanity CMS Schema Updates

#### 1.1 Service Request Document Type
Add a new document type `serviceRequest` to your Sanity schema with the following fields:

```javascript
{
  name: 'serviceRequest',
  type: 'document',
  title: 'Service Request',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceType',
      type: 'string',
      title: 'Service Type',
      options: {
        list: [
          { title: 'House Cleaner', value: 'House Cleaner' },
          { title: 'Chef', value: 'Chef' },
          { title: 'Nanny', value: 'Nanny' },
          { title: 'Teacher', value: 'Teacher' },
          { title: 'Tailor', value: 'Tailor' },
          { title: 'Plumber', value: 'Plumber' },
          { title: 'Engineer', value: 'Engineer' },
          { title: 'Other', value: 'Other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'additionalNotes',
      type: 'text',
      title: 'Additional Notes'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'In Progress', value: 'inProgress' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      initialValue: () => new Date().toISOString()
    }
  ]
}
```

### 2. API Endpoints Verification

#### 2.1 Service Request Endpoint
**Endpoint:** `POST /api/service-request`

**Expected Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+234 123 456 7890",
  "location": "Lagos, Nigeria",
  "serviceType": "House Cleaner",
  "additionalNotes": "Need someone experienced with deep cleaning",
  "confirmationEmail": {
    "html": "<html>...</html>"
  },
  "teamEmail": {
    "html": "<html>...</html>"
  }
}
```

**Expected Response:**
```json
{
  "success": true,
  "requestId": "sanity-document-id",
  "processingTime": "123ms"
}
```

**Backend Actions Required:**
- ✅ Frontend already handles saving to Sanity
- ✅ Frontend already sends confirmation email to user
- ✅ Frontend already sends notification email to admin
- **No additional backend work needed** - Frontend is self-contained

#### 2.2 User Registration Endpoint
**Endpoint:** `POST /api/register`

**Expected Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123",
  "dob": "1990-01-01"
}
```

**Expected Response:**
```json
{
  "success": true
}
```

**Backend Actions Required:**
- ✅ Frontend already handles user creation in Sanity
- ✅ Frontend already sends admin notification email
- **No additional backend work needed** - Frontend is self-contained

### 3. Email Configuration

#### 3.1 Environment Variables
Ensure these environment variables are set:
- `RESEND_API_KEY` - Required for sending emails
- `EMAIL_FROM` - Optional, defaults to "Lagos Drivers Link <no-reply@lagosdriverslink.com>"
- `SANITY_API_WRITE_TOKEN` - Required for saving to Sanity

#### 3.2 Email Recipients
All admin notifications are sent to: **teams@lagosdriverslink.com**

### 4. Database/Storage Requirements

#### 4.1 Sanity CMS
- Ensure write access is configured for the `serviceRequest` document type
- Ensure the `user` document type exists and is accessible
- Verify API tokens have proper permissions

### 5. Testing Checklist

#### 5.1 Service Request Flow
- [ ] Test submitting a service request form
- [ ] Verify data is saved to Sanity with correct structure
- [ ] Verify user receives confirmation email
- [ ] Verify admin receives notification email at teams@lagosdriverslink.com
- [ ] Test all service types (House Cleaner, Chef, Nanny, Teacher, Tailor, Plumber, Engineer, Other)

#### 5.2 User Registration Flow
- [ ] Test user registration
- [ ] Verify user is created in Sanity
- [ ] Verify admin receives notification email with user details
- [ ] Test duplicate email handling

#### 5.3 Error Handling
- [ ] Test with missing required fields
- [ ] Test with invalid email format
- [ ] Test with invalid phone format
- [ ] Test when RESEND_API_KEY is missing
- [ ] Test when Sanity write fails

## Integration Notes

### Frontend-Backend Integration
The frontend implementation is **self-contained** and handles:
1. Form validation
2. Data submission to Sanity CMS
3. Email generation and sending
4. Error handling

**The backend team only needs to:**
1. Add the `serviceRequest` document type to Sanity schema (if not already present)
2. Ensure API tokens have proper write permissions
3. Verify email service (Resend) is properly configured
4. Test the endpoints to ensure everything works as expected

### Data Flow

#### Service Request Flow:
```
User fills form → Frontend validates → 
Frontend generates emails → 
Frontend saves to Sanity → 
Frontend sends confirmation email to user → 
Frontend sends notification email to admin
```

#### User Registration Flow:
```
User fills registration form → Frontend validates → 
Frontend creates user in Sanity → 
Frontend sends notification email to admin
```

## Questions or Issues?

If you encounter any issues during integration:
1. Check browser console for frontend errors
2. Check server logs for API errors
3. Verify environment variables are set correctly
4. Verify Sanity schema matches the expected structure
5. Verify Resend API key is valid and has proper permissions

## Summary

**What Frontend Has Done:**
- ✅ Created service request form and page
- ✅ Created API endpoint `/api/service-request`
- ✅ Updated registration endpoint to send admin emails
- ✅ Created all necessary email templates
- ✅ Implemented full flow with error handling

**What Backend Needs to Do:**
1. Add `serviceRequest` document type to Sanity schema (if needed)
2. Verify Sanity API write permissions
3. Verify Resend email service configuration
4. Test the integration end-to-end

The frontend is production-ready and should work seamlessly once the Sanity schema is updated and permissions are verified.









