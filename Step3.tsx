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
    <div className="space-y-8 px-6 pl-10">
      <p className="text-center text-gray-700 mb-8 text-lg font-medium tracking-wide">
        Please review your information before submitting
      </p>

      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-10 border-2 border-blue-200 shadow-lg">
        <div className="space-y-6">
          {reviewItems.map((item, index) => (
            <div key={index} className="flex items-start gap-6 py-5 px-6 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <span className="text-4xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-gray-900 break-words">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <p className="text-sm text-gray-700 flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <span className="pt-1">
            Please verify all information is correct. You can go back to edit if needed.
          </span>
        </p>
      </div>
    </div>
  )
}