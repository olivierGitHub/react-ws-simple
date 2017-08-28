import React, { Component } from 'react';

class ProductThumbnail extends Component {

  constructor(props) {
      super(props);

      this.state = {
         productImg: this.props.productImg
      }

      this.changeProductThumbnail = this.changeProductThumbnail.bind(this);
      this.handleArticleThumbnail = this.handleArticleThumbnail.bind(this);

   };

   changeProductThumbnail(img){
      this.setState({productImg: img});
   }


   handleArticleThumbnail(){
    var that = this;
    console.log(this.props.productImg)
    return (<div>
          {
            this.props.articleThumbnails.map(function(article){
              console.log(article);
              return (
                <img height="101" width="101" alt={article.imgArticle} src={article.imgArticle} key={article.imgArticle} onClick={() => that.changeProductThumbnail(article.imgArticle)} />
            )})
          }
        </div>)
   }

  render () {
    return (
      <div className="row">
        <div>
          <img alt={this.state.productImg} src={this.state.productImg} height="202" width="202" />
          {this.handleArticleThumbnail()}
        </div>

      </div>
      )
  }
}

export default ProductThumbnail;
