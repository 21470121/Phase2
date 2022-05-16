import React from 'react';
import './home.css'

class Home extends React.Component {
    render() {
        return <div className="home">
            <h1>MetaVillages</h1>
        <div className="container">
                <div className="LeftColumn">
                    <div className="btnGroup">
                        <button type="button" className="MevillButtons">Available Waste</button><br></br>
                        <button type="button" className="MevillButtons">Available Materials</button><br></br>
                        <button type="button" className="MevillButtons">Available Products</button><br></br>
                        <button type="button" className="MevillButtons">Available Jobs</button><br></br>
                    </div>
                </div>

                <div className="CenterColumn">
                    <div className="MyVillage">
                        <h3><button type="button" className="MevillButtons">My Village</button></h3>
                    </div>
                </div>

                <div className="RightColumn">
                    <div className="btnGroup">
                        <button type="button" className="MevillButtons">Requested Waste</button><br></br>
                        <button type="button" className="MevillButtons">Requested Materials</button><br></br>
                        <button type="button" className="MevillButtons">Requested Products</button><br></br>
                        <button type="button" className="MevillButtons">Requested Jobs</button><br></br>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;