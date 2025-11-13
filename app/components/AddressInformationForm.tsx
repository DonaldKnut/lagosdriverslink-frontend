import { ChangeEvent } from "react";
import { Home, Briefcase, Info } from "lucide-react";

interface AddressInformation {
  homeAddress: string;
  officeAddress: string;
  hasAccommodation: boolean;
}

interface AddressInformationFormProps {
  data: AddressInformation;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

export default function AddressInformationForm({
  data,
  handleInputChange,
}: AddressInformationFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
        <Home className="w-6 h-6" />
        Address Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Home className="w-4 h-4" />
            Home Address
          </label>
          <input
            required
            name="homeAddress"
            type="text"
            value={data.homeAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your residential address"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Office Address
          </label>
          <input
            name="officeAddress"
            type="text"
            value={data.officeAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your office address"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="border-2 border-dashed border-yellow-500/60 bg-yellow-400/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="hasAccommodation"
                  checked={data.hasAccommodation || false}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-yellow-600 bg-white border-yellow-600 rounded focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-yellow-100 cursor-pointer transition-all"
                />
                <div>
                  <span className="text-white font-bold text-base group-hover:text-yellow-100 transition-colors">
                    Has Accommodation for Driver
                  </span>
                  <p className="text-white text-sm mt-1 font-semibold">
                    Check this box if you have accommodation available for the driver
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
