import React, { Component } from 'react';

class commentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            author: '',
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmitComment} id="form2">
                    <div>
                        <label htmlFor="body">
                            Novo Comentário:
                            <textarea
                                name="body"
                                value={this.state.body}
                                placeholder="Digite os detalhes"
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="author">
                            Author:
                            <input
                                name="author"
                                type="text"
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                placeholder="Digite o nome do Autor"
                                readOnly={this.state.postId}
                            />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

export default commentForm;
