const SubmitButton = ({ loading }) => {
    return (
        <button aria-label={`${loading ? 'Loading test results' : 'Submit URLs to WebPageTest'}`} className="bg-well-read hover:bg-punch focus:bg-punch transition ease-in-out duration-250 mt-6 px-8 py-2 text-white rounded" type="submit">{loading ? 'Loading...' : 'Submit'}</button>
    )
}

export default SubmitButton;