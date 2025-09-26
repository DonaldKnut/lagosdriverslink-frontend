"use client";

import { Save, Mail, Bell, Lock, Globe, User } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import { Separator } from "@/app/components/ui/separator";
import { useState, useEffect } from "react";
import { useToast } from "@/app/components/Toast";

interface UserData {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  emailNotifications: boolean;
  twoFactorEnabled: boolean;
  sessionTimeout: boolean;
  createdAt: string;
  lastLogin: string;
}

export default function SettingsPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    emailNotifications: false,
    twoFactorEnabled: false,
    sessionTimeout: true,
  });
  const { trigger } = useToast();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dashboard/user");

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          bio: data.bio,
          emailNotifications: data.emailNotifications,
          twoFactorEnabled: data.twoFactorEnabled,
          sessionTimeout: data.sessionTimeout,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        trigger("error", "Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [trigger]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await fetch("/api/dashboard/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      trigger("success", "Settings saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
      trigger("error", "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-48"></div>
          </div>
          <div className="h-10 bg-gray-700 rounded w-32"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-700 rounded"></div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-700 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-amber-100">
            Error Loading Settings
          </h2>
          <p className="text-gray-300 mt-2">
            Unable to load user settings. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Account Settings</h2>
        <Button
          className="bg-amber-600 hover:bg-amber-700"
          onClick={handleSave}
          disabled={saving}
        >
          <Save className="h-4 w-4 mr-2" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Navigation */}
        <div className="space-y-4">
          <Card className="p-2">
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-amber-600/30 text-amber-400">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Lock className="h-4 w-4" />
                <span>Security</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Globe className="h-4 w-4" />
                <span>Preferences</span>
              </button>
            </nav>
          </Card>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-amber-400" />
              Profile Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Email Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-amber-400" />
              Email Address
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Primary Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="email-notifications"
                  checked={formData.emailNotifications}
                  onCheckedChange={(checked) =>
                    handleInputChange("emailNotifications", checked)
                  }
                />
                <Label htmlFor="email-notifications">
                  Receive email notifications
                </Label>
              </div>
            </div>
          </Card>

          {/* Security Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-amber-400" />
              Security
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    defaultValue="········"
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                  >
                    Change
                  </Button>
                </div>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center space-x-2">
                <Switch
                  id="two-factor"
                  checked={formData.twoFactorEnabled}
                  onCheckedChange={(checked) =>
                    handleInputChange("twoFactorEnabled", checked)
                  }
                />
                <Label htmlFor="two-factor">Two-factor authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="session-timeout"
                  checked={formData.sessionTimeout}
                  onCheckedChange={(checked) =>
                    handleInputChange("sessionTimeout", checked)
                  }
                />
                <Label htmlFor="session-timeout">
                  Enable session timeout (30 mins)
                </Label>
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-500/30 bg-red-500/10">
            <h3 className="font-semibold text-lg mb-4 text-red-400">
              Danger Zone
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-red-300">Delete Account</Label>
                <p className="text-sm text-red-400/70 mb-2">
                  Permanently remove your account and all associated data
                </p>
                <Button
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
