import React from 'react'
import { Form, Input, Button } from 'antd';

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.form.validateFields();
  }



  handleSubmit = e => {
    e.preventDefault();
    console.log('e点击了提交查询', e)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  formatHtml(element, getFieldDecorator) {
    return (
      <Form.Item label={element.label}>
        {getFieldDecorator(element.name, {
          rules: [{ required: false, message: 'Please input your username!' }],
        })(
          <Input
            placeholder={element.placeholder}
          />,
        )}
      </Form.Item>
    )
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { filterConfig } = this.props;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        {
          filterConfig.map(element => this.formatHtml(element, getFieldDecorator))
        }
        <Form.Item>
          <Button type="primary" className="g-mr10" htmlType="submit">
            查询
          </Button>
          <Button onClick={this.onReset}>重置</Button>
        </Form.Item>
      </Form >
    )
  }
}
const Pages = Form.create({ name: 'horizontal_login' })(Page);

export default Pages