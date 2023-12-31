const Preloader = () => {
    return (
        <div className="page-loader">
            <div className="page-loader__spinner">
                <svg viewBox="25 25 50 50">
                    <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
        </div>
    );
}

export default Preloader;