const Status = ({ status }) => {

    if( !status ) {
        return null;
    }

    return <span className="inline-block ml-4 text-xs text-well-read">{status}</span>;
}

export default Status;