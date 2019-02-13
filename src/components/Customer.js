import React from 'react';

// React.Component 는 일종의 라이브러리자 컴포넌트라고 할 수 있다.
class Customer extends React.Component{
    // 항상 수행되는 내용으로써 실제 웹에 그려질 내용들을 담고 있는 곳
    render(){
        // 실제로 보여질 내용들은 리턴 형태로 되어있어야 에러가 안난다.
        return(
            // 하나이상의 정보들을 보여줄때는  div를 꼭 사용해야한다 
            <div>
                <CustomerProfile id = {this.props.id} image = {this.props.image} name= {this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )
        
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt = "profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}


class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }

}

export default Customer;