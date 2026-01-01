// Base API URL - MUST match Docker .NET backend port
const API_BASE_URL = "http://localhost:8000";

// ----------------------
// SIGNUP API
// ----------------------
export async function signup(data: any) {
  try {
    const requestData = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    const response = await fetch(`${API_BASE_URL}/api/Signup/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "Signup failed");
    }

    return await response.json();
  } catch (err: any) {
    console.error("Signup API error:", err);
    throw err;
  }
}

// ----------------------
// LOGIN API
// ----------------------
export async function login(data: any) {
  try {
    const requestData = {
      email: data.email,
      password: data.password,
    };

    const response = await fetch(`${API_BASE_URL}/api/Auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    return result; // Contains: { message, user }
  } catch (err: any) {
    console.error("Login API error:", err);
    throw err;
  }
}

// ----------------------
// CHAT API
// ----------------------
export async function sendChatMessage(message: string) {
  try {
    const requestData = {
      message: message,
    };

    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      let errorMessage = "Failed to get chat response";
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.detail || errorMessage;
      } catch (parseError) {
        // If JSON parsing fails, try to get text
        try {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
        } catch (textError) {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result; // Contains: { reply: "..." }
  } catch (err: any) {
    console.error("Chat API error:", err);
    throw err;
  }
}
