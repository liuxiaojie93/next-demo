import Homepage from "../components/index.js";
import Layout from "../components/layout";
import axios from "axios"
import React, { Component } from "react";
export default class Index extends Component {
  static async getInitialProps() {
    const res = await axios.get(
      "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3360030",
      {
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    );
    const {
        data:{
            data:{
                films
            }
        } 
    } = res;
    return {films}
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout>
          <Homepage films={this.props.films} />
        </Layout>
      </div>
    );
  }
}
