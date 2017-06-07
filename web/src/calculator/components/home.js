import React, { Component } from 'react';
import Title from './subComponent/title.js';
import Paragraph from './subComponent/paragraph.js';
import $ from 'jquery';


class Home extends Component {

  constructor(props) {
      super(props);

      this.state = {
         homeText: 'sera initialisé par le componentWillMount'
      }
   };

  componentWillMount() {
      var ctx = this;
        $.ajax({
                type: "GET",
                url: "http://localhost:8080/getHomeContent",
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                success: function(data){
                    ctx.setState({homeText:data});
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
          });
   }


  render() {
    return (
      <div>
        <br />
        <Title value="This is the homepage" />
        <br />
        <Paragraph text={this.state.homeText} />
        <Paragraph text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Paragraph text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore." />
      </div>
    );
  }
}

export default Home;
