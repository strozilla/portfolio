import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';
import About from '../pages/About';
import Projects from '../pages//Projects';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPreloaded: true,
		};
	}

	componentDidMount() {
		this.timeoutId = setTimeout(() => {
			this.setState({ isPreloaded: false });
		}, 100);
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	render() {
		const { children, fullMenu } = this.props;
		const { isPreloaded } = this.state;
		return (
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={(data) => (
					<>
						<Helmet
							title={data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Strozilla' },
								{
									name: 'keywords',
									content: 'portfoliio, site, web',
								},
							]}
						>
							<html lang="en" />
						</Helmet>
						<div
							className={
								isPreloaded
									? 'landing main-body is-preload'
									: 'landing main-body'
							}
						>
							<div id="page-wrapper">
								<Link href="/">
									<SideBar fullMenu={fullMenu} />
								</Link>
								{children}

								<Footer />
							</div>
						</div>
					</>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
