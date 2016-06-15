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
                                    <label className="sr-only" for="queryYear">Year</label>
                                    <input type="text" className="form-control Filter-input" id="queryYear" placeholder="年"/>
                                </div>
                            </div>

                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" for="queryMonth">Month</label>
                                    <input type="text" className="form-control Filter-input" id="queryMonth" placeholder="月"/>
                                </div>
                            </div>

                            <div className="col-xs-12">
                                <div className="form-group Form-item">
                                    <label className="sr-only" for="queryCompany">Company</label>
                                    <input type="text" className="form-control Filter-input" id="queryCompany" placeholder="公司"/>
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

module.exports = Filter;
