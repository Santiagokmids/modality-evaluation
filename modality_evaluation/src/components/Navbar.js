import { Component } from "react";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            Bienvenid@, mucha suerte {this.props.title}
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}