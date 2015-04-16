var data = [
	{ id: 1001, group: "one", name: "山东烟台大苹果", price: "5.0", state: 1 },
	{ id: 1002, group: "one", name: "火龙果", price: "2.9", state: 0 },
	{ id: 1003, group: "one", name: "进口香蕉", price: "2.0", state: 0 },
	{ id: 1004, group: "two", name: "牛奶", price: "5.0", state: 9 },
	{ id: 1005, group: "two", name: "青岛啤酒", price: "7.0", state: 9 }
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
	render: function () {
		return (
			<tr className="item-info">
				<td className="i-checked"><input type="checkbox" id={this.props.item.id} /></td>
				<td className="i-photo"><label htmlFor={this.props.item.id}><img src="item-photo.png" /></label></td>
				<td className="i-name"><label htmlFor={this.props.item.id}>{this.props.item.name}</label></td>
				<td className="i-price-and-number"><span>{this.props.item.price}</span><br /><input type="text" /></td>
			</tr>
		);
	}
});

var ItemsTable = React.createClass({
	render: function () {
		var rows = [];
		var lastGroup = null;
		this.props.items.forEach(function (item) {
			if (item.group !== lastGroup) {
				rows.push(<Group groupName={item.group} key={Math.random()} />);
			}
			rows.push(<Item item={item} key={Math.random()} />);
			lastGroup = item.group;
		})
		return (
			<table className="items-table">
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
					<td colSpan="2"><label htmlFor="all-check">全选</label></td>
					<td className="g-action-button"><button>删除</button></td>
				</tr>
			</table>
		);
	}
});


var EditUI = React.createClass({
	render: function () {
		return (
			<div className="edit-ui">
				<ItemsTable items={this.props.data} />
				<BottomBar />
			</div>
		);
	}
});

React.render(<EditUI data={data} />, document.getElementById('container'));