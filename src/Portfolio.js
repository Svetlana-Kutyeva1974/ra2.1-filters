
import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import ImagesList from './ImagesList'

class Portfolio extends Component {
  static propTypes = {
    filters: PropTypes.array,
    state: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.filter = ["All", "Websites", "Flayers", "Business Cards"];
    this.listImg = ImagesList;
    this.state = {selected: 'All'}
  }
  onClickButton(evt) {
    console.log('statika', this.listImg);
    this.setState({selected: evt});
  }

  onListFilter() {
    return this.state.selected === 'All'
      ? this.listImg
      : this.listImg.filter((item) => item.category === this.state.selected);
  }
  
render() { 
  return (
    <div class="main-content">
      <Toolbar
        filters={this.filters}
        selected={this.state.selected}
        onSelectfilter={(evt) => this.onClickButton(evt)}
      />
      <ProjectList projects={this.onListFilter()} />  
    </div>
    
  );
}
}

/*Portfolio.propTypes = {
  item: PropTypes.instanceOf(ProjectList).isRequired
}*/

export default Portfolio;
