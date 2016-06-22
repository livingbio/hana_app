var React = require('react');

class Filter extends React.Component{
    render(){
        return(
            <div id="filter" className="Background-orange Filter">
                <div className="container">

                    <div className="Nav-title">
                        篩選器
                    </div>

                    <form className="Filter-form">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryYear">Year</label>
                                    {/*<input type="text" className="form-control Filter-input" id="queryYear" placeholder="年"/>*/}
                                    <select className="form-control Filter-input selectpicker">
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryMonth">Month</label>
                                    {/*<input type="text" className="form-control Filter-input" id="queryMonth" placeholder="月"/>*/}
                                    <select className="form-control Filter-input selectpicker">
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                   </select>
                                </div>
                            </div>

                            <div className="col-xs-12">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryCompany">Company</label>
                                    {/*<input type="text" className="form-control Filter-input" id="queryCompany" placeholder="公司"/>*/}
                                        <select className="form-control Filter-input selectpicker">
                                         <option value="LeadTek">LeadTek</option>
                                         <option value="IIoT">IIoT</option>
                                       </select>
                                </div>
                            </div>
                        </div>

                        <div className="row Filter-ButtonRow">
                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-default Filter-Button--cancel">取消</button>
                            </div>

                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-default Filter-Button">確定</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

Filter.propTypes= {
    username: React.PropTypes.string,
    password: React.PropTypes.string
};

module.exports = Filter;
