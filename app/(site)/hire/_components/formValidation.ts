import { FormDataType } from "./useFormData";

// Validation rules for each section
export const validationRules = {
  personal: (data: FormDataType) => {
    const { emailAddress, phoneNumber, maritalStatus } =
      data.personalDetails;

    const errors: string[] = [];

    // Only validate marital status as required
    if (!maritalStatus) errors.push("Please select your marital status");

    // Email validation (only if provided)
    if (emailAddress && emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress)) {
        errors.push("Please enter a valid email address");
      }
    }

    // Phone validation (only if provided)
    if (phoneNumber && phoneNumber.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(phoneNumber)) {
        errors.push("Please enter a valid phone number");
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  driver: (data: FormDataType) => {
    const {
      driverType,
      contractDuration,
      workSchedule,
      dutiesDescription,
      resumptionDate,
      resumptionTime,
      closingTime,
    } = data.projectDetails;

    const errors: string[] = [];

    if (!driverType) errors.push("Please select the type of driver you need");
    if (!contractDuration) errors.push("Please choose the contract duration");
    if (!workSchedule) errors.push("Please select the work schedule");
    if (!dutiesDescription.trim())
      errors.push("Please describe the driver's duties and responsibilities");
    if (!resumptionDate) errors.push("Please select the resumption date");
    if (!resumptionTime) errors.push("Please set the daily start time");
    if (!closingTime) errors.push("Please set the daily end time");

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  vehicle: (data: FormDataType) => {
    const {
      providesVehicle,
      vehicleType,
      transmissionType,
      insuranceType,
      vehicleBrand,
      vehicleModel,
      vehicleYear,
    } = data.vehicleDetails;

    const errors: string[] = [];

    if (!providesVehicle)
      errors.push("Please indicate if you will provide a vehicle");
    if (!vehicleType) errors.push("Please select the vehicle type");
    if (!transmissionType) errors.push("Please choose the transmission type");
    if (!insuranceType) errors.push("Please select the insurance type");

    // If vehicle is provided, require vehicle details
    if (providesVehicle === "yes") {
      if (!vehicleBrand.trim()) errors.push("Please enter the vehicle brand");
      if (!vehicleModel.trim()) errors.push("Please enter the vehicle model");
      if (!vehicleYear.trim()) errors.push("Please enter the vehicle year");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  address: (data: FormDataType) => {
    const { homeAddress, officeAddress } = data.addressInformation;

    const errors: string[] = [];

    if (!homeAddress.trim()) errors.push("Please enter your home address");
    if (!officeAddress.trim()) errors.push("Please enter your office address");

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
};

// Check if a section can be accessed (strict sequential flow)
export const canAccessSection = (
  section: string,
  formData: FormDataType,
  activeSection: string
): boolean => {
  const sections = ["personal", "driver", "vehicle", "address"];
  const currentIndex = sections.indexOf(section);
  const activeIndex = sections.indexOf(activeSection);

  // Only allow access to the active section or completed sections
  if (section === activeSection) return true;

  // Allow access to previous completed sections
  if (currentIndex < activeIndex) {
    const sectionKey = section as keyof typeof validationRules;
    const validation = validationRules[sectionKey](formData);
    return validation.isValid;
  }

  // Block access to future sections
  return false;
};

// Get validation status for all sections
export const getSectionStatus = (formData: FormDataType) => {
  return {
    personal: validationRules.personal(formData),
    driver: validationRules.driver(formData),
    vehicle: validationRules.vehicle(formData),
    address: validationRules.address(formData),
  };
};
