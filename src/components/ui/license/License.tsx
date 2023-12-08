const License = () => {
    return (
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" name="radioDisabled" id="login-check" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="login-check">Accept the license agreement</label>
            </div>
        </div>
    );
}

export default License;