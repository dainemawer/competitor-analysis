const Input = ({ id, placeholder, index, label, register, type }) => {
    return (
        <div className={`w-full ${index === 0 ? 'mb-10' : 'mb-4'}`} key={`key-${id}`}>
            <label className="flex items-center text-sm" htmlFor={`input-${id}`}>
                <span className="w-2/12">{label}</span>
                <input
                    className="w-10/12 text-sm rounded"
                    id={`input-${id}`}
                    type={type}
                    name={id}
                    aria-required={true}
                    placeholder={placeholder}
                    {...register(id, {
                        pattern: {
                            value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                            message: "URL is invalid"
                        }
                    })}
                 />
            </label>
        </div>
    );
}

export default Input;