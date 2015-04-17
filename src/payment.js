

/* ReactJS Codes */

var Item = React.createClass({

    render: function () {
        var disabled = (this.props.item.state === 1) ? "" : "false";
        return (
            <tr className="item-info">
            <td className="check-box"><div className="g-checked"><input type="checkbox" id={this.props.item.id} disabled={disabled} /><span></span></div></td>
            <td className="i-photo"><label htmlFor={this.props.item.id}><img src="item-photo.png" /></label></td>
            <td className="i-name"><label htmlFor={this.props.item.id}>{this.props.item.name.slice(0, 18)}</label></td>
            <td className="i-price-and-number"><span>{this.props.item.price}</span><br /><input type="text" defaultValue="1" onChange={this.handleInputValue} disabled={disabled} /></td>
            </tr>
        );
    }
});

var Group = React.createClass({
    render: function () {
        var rows = [];
        this.props.group.items.forEach(function (item) {
            rows.push(<Item item={item} key={item.id} />);
        })
        return (
            <tbody className="group-info">
            <tr className="group-title">
            <td className="check-box"><div className="g-checked"><input type="checkbox" /><span></span></div></td>
            <td colSpan="3">{this.props.group.name}</td>
            </tr>
            {rows}
            </tbody>
        );
    }
});


var ItemsTable = React.createClass({

    render: function () {
        var rows = [];
        this.props.data.groups.forEach(function (group) {
            rows.push(<Group group={group} key={group.id} />);
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
            <td className="check-box"><div className="g-checked"><input type="checkbox" id="all-check" onChange={this.handleCheckAllBox} /><span></span></div></td>
            <td><label htmlFor="all-check">全选</label></td>
            <td className="g-total">合计：<span>12.7</span> 元<br /><small>不含运费</small></td>
            <td className="g-action-button"><button>结算</button></td>
            </tr>
            </table>
        );
    }
});


var PaymentUI = React.createClass({

    getInitialState: function () {
        return {totalPrice: 0};
    },

    handleInputValue: function () {

    },
    handleCheckBox: function () {

    },
    handleCheckAllBox: function () {

    },
    render: function () {
        var data = {
            groups: [
                {
                    id: 201,
                    name: "水果专场",
                    items: [
                        { id: 1001, name: "山东烟台大苹果，又甜又脆", price: "5.0", state: 1 },
                        { id: 1002, name: "火龙果", price: "2.9", state: 1 },
                        { id: 1003, name: "进口香蕉", price: "2.0", state: 0 },
                    ],
                },
                {
                    id: 202,
                    name: "饮料专场",
                    items: [
                        { id: 1004, name: "牛奶", price: "5.0", state: 1 },
                        { id: 1005, name: "青岛啤酒", price: "7.0", state: -1 },
                    ],
                },
                {
                    id: 203,
                    name: "速食专场",
                    items: [
                        { id: 1006, name: "汉堡包", price: "2.0", state: 0 },
                        { id: 1007, name: "披萨", price: "5.0", state: 1 },
                    ]
                },
                {
                    id: 204,
                    name: "北京特产专场",
                    items: [
                        { id: 1008, name: "北京烤鸭", price: "42.0", state: 0 },
                    ]
                }
            ]
        };
        return (
            <div className="payment-ui">
            <ItemsTable data={data} />
            <BottomBar />
            </div>
        );
    }
});

React.render(<PaymentUI />, document.getElementById('container'));