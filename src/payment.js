var data = [
	{ id: 1001, group: "one", name: "山东烟台大苹果", price: "5.0", state: 1 },
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
				<td className="g-checked"><input type="checkbox" /></td>
				<td colSpan="3">专场 {this.props.groupName}</td>
			</tr>
		);
	}
});

var Item = React.createClass({
	handleValueChange: function (e) {
		console.log(e.target.value * this.props.item.price);
	},

	render: function () {
		var disabled = (this.props.item.state === 1) ? "" : "false";
		return (
			<tr className="item-info">
				<td className="i-checked"><input type="checkbox" id={this.props.item.id} disabled={disabled} /></td>
				<td className="i-photo"><label htmlFor={this.props.item.id}><img src="item-photo.png" /></label></td>
				<td className="i-name"><label htmlFor={this.props.item.id}>{this.props.item.name}</label></td>
				<td className="i-price-and-number"><span>{this.props.item.price}</span><br /><input type="text" onChange={this.handleValueChange} disabled={disabled} /></td>
			</tr>
		);
	}
});

var ItemsTable = React.createClass({
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
					<td className="g-checked"><input type="checkbox" id="all-check" /></td>
					<td><label htmlFor="all-check">选择所有商品</label></td>
					<td className="g-total">合计：<span>12.9</span> 元<br /><small>不含运费</small></td>
					<td className="g-action-button"><button>结算</button></td>
				</tr>
			</table>
		);
	}
});


var PaymentUI = React.createClass({
	getInitialState: function () {
		return {
			tp: 0
		};
	},

	render: function () {
		return (
			<div className="payment-ui">
				<ItemsTable items={this.props.data} tp={this.state.tp} />
				<BottomBar />
			</div>
		);
	}
});

React.render(<PaymentUI data={data} />, document.getElementById('container'));