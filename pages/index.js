import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from "react";
import ReactDOM from "react-dom";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Домашние задание</title>
        <link rel="icon" href="/icon-removebg-preview.png" />
      </Head>

      <main>
       // <Header title="Welcome to my app!" />
        // <p className="description">
          // Get started by editing <code>pages/index.js</code>
       </p> 
    <center>
<div class="Homework">
<h1><center>Домашние задание</center></h1>
<h2>!Внимание!Домашние задание только для 8б Столинской государственной гимназии</h2>
<p>Чтобы узнать домашние задание:</p>
<p>1.Выберите неделю(текущую или следующую)</p>
<p>2.Выберите день недели(понедельник-пятница)</p>
<p>3.Нажмите кнопку "Посмотреть" </p>





class App extends React.Component {
  constructor(props) }
  {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


      </main>

      <Footer />
    </div>
  )
}
