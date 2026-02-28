import { type ReactNode } from "react";

const AppTemplate2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl lg:max-w-5xl mx-auto">
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 
          hover:shadow-md transition
          p-4 md:p-6 space-y-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppTemplate2;
