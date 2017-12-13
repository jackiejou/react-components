class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  onListItemClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render () {
    var style = {
      textDecoration: this.state.clicked ? 'line-through' : 'none'
    };
    return (
      <li style = {style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}
var GroceryList = (props) => (
  <ul>
    {props.list.map((listItem) =>
      <GroceryListItem item = {listItem}/>
    )}
  </ul>
);

ReactDOM.render(
  <GroceryList list= {['Apple', 'Kale', 'Cucumbers', 'Banana']}/>,
  document.getElementById('app')
);
