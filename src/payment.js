var data = [
	{ id: 1001, group: "one", name: "山东烟台大苹果，又甜又脆", price: "5.0", state: 1 },
	{ id: 1002, group: "one", name: "火龙果", price: "2.9", state: 1 },
	{ id: 1003, group: "one", name: "进口香蕉", price: "2.0", state: 0 },
	{ id: 1004, group: "two", name: "牛奶", price: "5.0", state: 1 },
	{ id: 1005, group: "two", name: "青岛啤酒", price: "7.0", state: -1 },
	{ id: 1006, group: "three", name: "汉堡包", price: "2.0", state: 0 },
	{ id: 1007, group: "three", name: "披萨", price: "5.0", state: 1 },
	{ id: 1008, group: "four", name: "北京烤鸭", price: "7.0", state: 0 }
];


/* ReactJS Codes */
var Group = React.createClass({
	render: function () {
		return (
			<tr className="group-title">
				<td className="check-box"><div className="g-checked"><input type="checkbox" /><span></span></div></td>
				<td colSpan="3">专场 {this.props.groupName}</td>
			</tr>
		);
	}
});

var Item = React.createClass({

	getInitialState: function () {
		return {totalPrice: 0};
	},

	handleValueChange: function (e) {
		this.setState({totalPrice: e.target.value * this.props.item.price});
	},

	render: function () {
		var disabled = (this.props.item.state === 1) ? "" : "false";
		return (
			<tr className="item-info">
				<td className="check-box"><div className="g-checked"><input type="checkbox" id={this.props.item.id} disabled={disabled} /><span></span></div></td>
				<td className="i-photo"><label htmlFor={this.props.item.id}><img src="item-photo.png" /></label></td>
				<td className="i-name"><label htmlFor={this.props.item.id}>{this.props.item.name.slice(0, 18)}</label></td>
				<td className="i-price-and-number"><span>{this.props.item.price}</span><br /><input type="text" defaultValue="1" onChange={this.handleValueChange} disabled={disabled} /></td>
			</tr>
		);
	}
});

var ItemsTable = React.createClass({
	componentDidMount: function () {
		console.log(document.getElementById('all-check'));
	},
	render: function () {
		var rows = [];
		var lastGroup = null;
		console.log(this.props.tp);
		this.props.items.forEach(function (item) {
			if (item.group !== lastGroup) {
				rows.push(<Group groupName={item.group} key={Math.random()} />);
			}
			rows.push(<Item item={item} key={Math.random()} />);
			lastGroup = item.group;
		})
		return (
			<table className="items-table good-list">
			{rows}
			</table>
		);
	}
});


var BottomBar = React.createClass({
	render: function () {
		return (
			<table className="items-table fixed">
				<tr className="group-title">
					<td className="check-box"><div className="g-checked"><input type="checkbox" id="all-check" /><span></span></div></td>
					<td><label htmlFor="all-check">全选</label></td>
					<td className="g-total">合计：<span>12.7</span> 元<br /><small>不含运费</small></td>
					<td className="g-action-button"><button>结算</button></td>
				</tr>
			</table>
		);
	}
});


var PaymentUI = React.createClass({

	render: function () {
		return (
			<div className="payment-ui">
				<ItemsTable items={this.props.data} />
				<BottomBar />
			</div>
		);
	}
});

React.render(<PaymentUI data={data} />, document.getElementById('container'));