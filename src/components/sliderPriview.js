import React from 'react';
import $ from 'jquery';
import "./../compositions/Solutions/index.scss";

class SliderPreview extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentLabel : 0,
      totalLabels: 4,
      timerToken: undefined
    }
    this.nextLabel = this.nextLabel.bind(this)

  }

  componentDidMount(){
    $('#label-0').addClass('active-label');
    const timerToken = setInterval( this.nextLabel, 3900);
    this.setState({
      timerToken: timerToken
    })
  }

  nextLabel(){
    $(`#label-${(this.state.currentLabel + 1 + this.state.totalLabels) % this.state.totalLabels}`).addClass('active-label');
    $(`#label-${((this.state.currentLabel + this.state.totalLabels)) % this.state.totalLabels}`).removeClass('active-label');

    this.setState({
      currentLabel: (this.state.currentLabel + 1) % this.state.totalLabels
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.timerToken);
  }

  
  render(){

    return(
      <div className="columns" style={{ alignItems: 'centre'}}>
        <div className="column" data-aos="slide-right">
        <div class="container-1">
          <div class="screen monitor">
            <img className="content-screen" src={this.props.list[(this.state.currentLabel + this.state.totalLabels) % this.state.totalLabels].gifURL}>
            </img>
            <div class="base">
              {/* <div class="grey-shadow"></div> */}
              <div class="foot top"></div>
              <div class="foot bottom"></div>
              {/* <div class="shadow"></div> */}
              <div class="keyboard">
                <div class="btm"></div>
                <ul class="keys">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                {/* <div class="shadow"></div> */}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="column label-column" data-aos="slide-left">
          {
            this.props.list.map( (l, index) => (
              <div className={`labels`} id={`label-${index}`}>
                {l.label}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default SliderPreview;