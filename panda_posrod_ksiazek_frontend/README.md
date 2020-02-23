This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





            <Row className="w-100">
                <Col md="6" className="no-gutters padding-0">
                    <Card className="indexCardBig">
                        <Card.Img variant="top" src='#' className="cardImageBig"/>
                        <Card.Body>
                            <Card.Title> This is card title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6" className="no-gutters padding-0">
                    <Row className="justify-content-center">
                        <Card className="indexCard">
                            <Card.Img variant="top" src='#' className="cardImageBig"/>
                            <Card.Body>
                                <Card.Title> This is card title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="indexCard">
                            <Card.Img variant="top" src='#' className="cardImageBig"/>
                            <Card.Body>
                                <Card.Title> This is card title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Row>
                    </Col>
                </Row>
            <Row className="w-100 justify-content-center">
                <Col>
                <Card className="indexCardSmall">
                        <Card.Img variant="top" src='#' className="cardImage"/>
                        <Card.Body>
                            <Card.Title> This is card title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="indexCardSmall">
                        <Card.Img variant="top" src='#' className="cardImage"/>
                        <Card.Body>
                            <Card.Title> This is card title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="indexCardSmall">
                        <Card.Img variant="top" src='#' className="cardImage"/>
                        <Card.Body>
                            <Card.Title> This is card title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="indexCardSmall">
                        <Card.Img variant="top" src='#' className="cardImage"/>
                        <Card.Body>
                            <Card.Title> This is card title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>








                        <BrowserRouter>
                <Col className="imageTextAlign">  <img id='logoImage' src={logoImage} alt='Logo' /> </Col>
                    <Navbar expand="md" id="navbar" sticky="top" className="rounded">
                        <NavbarBrand href="#"> _panda_pośród_ksiązek_ </NavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className="option">  Początek </Nav.Link>
                                <Nav.Link href="/searcher" className="option"> Wyszukiwarka </Nav.Link>
                                <NavDropdown title="Narzędzia" className="option">
                                    <NavDropdown.Item href="/admin/blog/post/create" className="option"> Stwórz post </NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/blog/saved_posts" className="option"> Zapisane posty </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/login" className="option"> Zaloguj się </Nav.Link>
                            </Nav>
                            <Form inline>
                                <InputGroup.Prepend>
                                    <Button variant="primary" type="submit" formMethod="post"> Szukaj </Button>
                                </InputGroup.Prepend>
                                <FormControl type="text" name="title_keywords" placeholder="Szukaj"/>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
</BrowserRouter>
            