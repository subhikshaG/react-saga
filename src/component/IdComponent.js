import React from 'react'

export default class IdComponent extends React.PureComponent {



    handleClick = () => this.props.apiRequest();

    componentDidMount() {
        this.props.apiRequest()
        console.log("mounted")
    }

    render() {
        const { catImageUrl, quoteText } = this.props;
        const { fetching } = this.props;
        const { loading } = this.props;
        console.log("is it fetching" + fetching)
        console.log("is it loading"+loading);
        return (
            <React.Fragment>
                {!loading ? <div className="container">
                    <h1>Cats + Quotes</h1>
                    <div className="row">
                        <img src={catImageUrl} alt="A cat" />
                        in id component
                    </div>
                    <blockquote>{quoteText}</blockquote>
                    <button onClick={this.handleClick}>Gimme more...</button>
                </div> : <div> fetching
                        <button onClick={this.handleClick}>Gimme more...</button>
                    </div>}
            </React.Fragment>

        );
    }


}