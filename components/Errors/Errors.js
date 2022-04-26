const Errors = ({ id, errors, required }) => {

    return (
        <>
            {errors[id]?.type === 'required' && <span className="text-xs text-well-read">{required}</span>}
            {errors[id]?.type === 'pattern' && <span className="text-xs text-well-read">{errors[id]?.message}</span>}
        </>
    )
}

export default Errors;