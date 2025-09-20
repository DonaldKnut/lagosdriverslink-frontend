// Test script for driver request API
// Run this with: node test-driver-request.js

async function testDriverRequest() {
  try {
    console.log("Testing driver request API...");

    const testData = {
      fullName: "Test User",
      email: "test@example.com",
      phone: "+2341234567890",
      location: "Lagos, Nigeria",
      plan: "daily",
      additionalNotes: "Test request",
      confirmationEmail: {
        html: "<h1>Test Confirmation Email</h1>",
      },
      teamEmail: {
        html: "<h1>Test Team Email</h1>",
      },
    };

    const response = await fetch("http://localhost:3000/api/driver-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log("Response status:", response.status);
    console.log("Response body:", result);

    if (response.ok) {
      console.log("✅ API test successful!");
    } else {
      console.log("❌ API test failed:", result.error);
    }
  } catch (error) {
    console.error("❌ Test failed with error:", error.message);
  }
}

// Test email endpoint
async function testEmail() {
  try {
    console.log("\nTesting email endpoint...");

    const response = await fetch("http://localhost:3000/api/test-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "teams@lagosdriverslink.com",
      }),
    });

    const result = await response.json();

    console.log("Email test response status:", response.status);
    console.log("Email test response body:", result);

    if (response.ok) {
      console.log("✅ Email test successful!");
    } else {
      console.log("❌ Email test failed:", result.error);
    }
  } catch (error) {
    console.error("❌ Email test failed with error:", error.message);
  }
}

// Run tests
async function runTests() {
  await testEmail();
  await testDriverRequest();
}

runTests();
