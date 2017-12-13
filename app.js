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
      fontWeight: this.state.clicked ? 'bold' : ''
    };
    return (
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}
var GroceryList = (props) => (
  <ul>
    {props.list.map((listItem) =>
      <GroceryListItem key={listItem.toString()} item={listItem}/>
    )}
  </ul>
);

ReactDOM.render(
  <GroceryList list={['Apple', 'Kale', 'Cucumbers', 'Banana']}/>,
  document.getElementById('app')
);
