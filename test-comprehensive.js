// Comprehensive Test Script for LagosDriversLink APIs
// Run this with: node test-comprehensive.js

const API_BASE = "http://localhost:3000";

async function testEndpoint(endpoint, data, description) {
  console.log(`\n🧪 Testing: ${description}`);
  console.log(`📍 Endpoint: ${endpoint}`);

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(`📊 Status: ${response.status}`);
    console.log(`📄 Response:`, JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log(`✅ ${description} - SUCCESS`);
      return true;
    } else {
      console.log(
        `❌ ${description} - FAILED: ${result.error || result.message}`
      );
      return false;
    }
  } catch (error) {
    console.error(`💥 ${description} - ERROR:`, error.message);
    return false;
  }
}

async function runComprehensiveTests() {
  console.log("🚀 Starting Comprehensive API Tests");
  console.log("=".repeat(50));

  const results = {
    testEmail: false,
    driverRequest: false,
    hireRequest: false,
  };

  // Test 1: Email functionality
  results.testEmail = await testEndpoint(
    "/api/test-email",
    { to: "teams@lagosdriverslink.com" },
    "Email Service Test"
  );

  // Test 2: Driver Request API
  results.driverRequest = await testEndpoint(
    "/api/driver-request",
    {
      fullName: "Test User",
      email: "test@example.com",
      phone: "+2341234567890",
      location: "Lagos, Nigeria",
      plan: "daily",
      additionalNotes: "Test request from comprehensive test",
      confirmationEmail: {
        html: "<h1>Test Confirmation Email</h1><p>This is a test email.</p>",
      },
      teamEmail: {
        html: "<h1>Test Team Email</h1><p>This is a test team notification.</p>",
      },
    },
    "Driver Request API Test"
  );

  // Test 3: Hire API
  results.hireRequest = await testEndpoint(
    "/api/hire",
    {
      personalDetails: {
        fullName: "Test Hire User",
        emailAddress: "hiretest@example.com",
        phoneNumber: "+2349876543210",
        maritalStatus: "Single",
      },
      projectDetails: {
        driverType: "personal",
        contractDuration: "6-months",
        workSchedule: "weekdays",
        accommodationProvided: "no",
        dutiesDescription: "Drive to work and back",
        resumptionDate: "2024-01-15",
        resumptionTime: "08:00",
        closingTime: "17:00",
      },
      vehicleDetails: {
        providesVehicle: "Yes",
        vehicleBrand: "Toyota",
        vehicleModel: "Camry",
        vehicleYear: "2020",
        transmissionType: "Automatic",
        insuranceType: "Comprehensive",
      },
      addressInformation: {
        homeAddress: "123 Test Street, Lagos",
        officeAddress: "456 Business Avenue, Victoria Island",
      },
    },
    "Hire API Test"
  );

  // Summary
  console.log("\n" + "=".repeat(50));
  console.log("📋 TEST SUMMARY");
  console.log("=".repeat(50));

  Object.entries(results).forEach(([test, passed]) => {
    const status = passed ? "✅ PASSED" : "❌ FAILED";
    console.log(`${status} - ${test}`);
  });

  const allPassed = Object.values(results).every((result) => result);

  if (allPassed) {
    console.log("\n🎉 ALL TESTS PASSED! Your APIs are working correctly.");
  } else {
    console.log("\n⚠️  SOME TESTS FAILED. Check the logs above for details.");
    console.log("\n🔧 Troubleshooting Tips:");
    console.log("1. Make sure your .env.local file is configured");
    console.log("2. Check that RESEND_API_KEY is valid");
    console.log("3. Verify SANITY_API_WRITE_TOKEN is correct");
    console.log("4. Ensure your development server is running");
  }

  return allPassed;
}

// Environment check
function checkEnvironment() {
  console.log("🔍 Environment Check");
  console.log("=".repeat(30));

  const requiredVars = [
    "RESEND_API_KEY",
    "SANITY_API_WRITE_TOKEN",
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
    "NEXT_PUBLIC_SANITY_DATASET",
  ];

  requiredVars.forEach((varName) => {
    const value = process.env[varName];
    if (value) {
      console.log(`✅ ${varName}: Configured`);
    } else {
      console.log(`❌ ${varName}: Missing`);
    }
  });

  console.log("");
}

// Run the tests
async function main() {
  checkEnvironment();
  await runComprehensiveTests();
}

main().catch(console.error);
