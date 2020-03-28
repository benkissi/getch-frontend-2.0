import Link from 'next/link'

const SideBar = () => {
    return (
        <div className="menu">
            <div className="logo"><img src="/images/newLogoWhite.svg"/></div>
            <div className="menu-item">
               <Link href="/"><div className="item">Search</div></Link> 
            </div>
            <div className="menu-item">
               <Link href="/"><div className="item">Performance</div></Link> 
            </div>

            <style jsx>{`
                .menu {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: inherit;
                    padding: 10px;
                    background: #281742;
                    position: fixed;
                    z-index: 10;
                }

                .menu-item {
                    padding: 5px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    font-size: 15px;
                }

                .menu-item:hover {
                    background: #9482a3;
                    border-radius: 4px;
                }

                .logo {
                    margin-bottom: 100px;
                    width: 30%;
                    // align-self: center;
                }

                .logo img {
                    width: 100%;
                }

                .item {
                    color: #785999;
                }

                .menu-item:hover .item {
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default SideBar