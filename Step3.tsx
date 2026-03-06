import { UserFormData } from "@/types/users"

export default function Step3({ data }: { data: UserFormData }) {

  const reviewItems = [
    { label: "Full Name", value: `${data.firstName} ${data.lastName}`, icon: "👤" },
    { label: "Email", value: data.email, icon: "📧" },
    { label: "Phone", value: data.phone, icon: "📱" },
    { label: "Department", value: data.department, icon: "🏢" },
    { label: "Role", value: data.role, icon: "💼" },
  ]

  return (
    <div className="space-y-0">
      <p className="text-center text-gray-600 mb-8 text-lg font-medium">
        Please review your information before submitting
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-100">
        <div className="space-y-4">
          {reviewItems.map((item, index) => (
            <div key={index} className="flex items-start justify-between py-4 px-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-sm text-yellow-800 flex items-center gap-2">
          <span className="text-lg">ℹ️</span>
          <span>
            Please verify all information is correct. You can go back to edit if needed.
          </span>
        </p>
      </div>
    </div>
  )
}