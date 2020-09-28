import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
          <div className="filter">
            <div className="filter-result">{this.props.count} Products</div>
            <div className="filter-sort">
              Order by value{" "}
              <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option>Latest</option>
                <option value="lowest">Lowest</option>                  
                <option value="highest">Highest</option>
              </select>
            </div>
            <div className="filter-section">
              Filter by type of stone{" "}
              <select value={this.props.section} onChange={this.props.filterProducts}>
                <option value="">ALL</option>
                <option value="Granite">Granite</option>
                <option value="Marble">Marble</option>
                <option value="Quartz">Quartz</option>
                <option value="Soapstone">Soapstone</option>
              </select>
            </div>
          </div>
        );
    }
}
