const Header = props => {
    return (
        <div id="wrapper">
            <div>
                Header
            </div>
            <div id="actions">
                {
                props.actions ? 
                    props.actions.map((action, index) => (
                    <div key={index}>{action}</div>
                    )):''
                }
            </div>

        <style jsx>{`
            #wrapper {
                display: flex;
                width: 100%;
                padding: 10px 0 10px 0;
            }

            #actions {
                display: flex;
                flex: 2;
                justify-content: flex-end;
            }
        `}</style>
        </div>
    )
}

export default Header