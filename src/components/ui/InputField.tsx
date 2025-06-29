interface InputFieldProps {
    placeholder?: string;
    label?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ 
    placeholder = "", 
    label = "Email or username", 
    type = "text",
    value = "",
    onChange
}: InputFieldProps){
    return (
        <div className="relative w-full">
            <input
                type={type}
                placeholder=""
                value={value}
                onChange={onChange}
                className="peer w-full px-4 pt-6 pb-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <label
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
            >
                {label}
            </label>
        </div>
    )
}