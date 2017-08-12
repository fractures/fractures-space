import ReactGA from "react-ga"

const initGA = () => {
	ReactGA.initialize("UA-17037942-5")
}

const logPageView = () => {
	ReactGA.set({ page: window.location.pathname })
	ReactGA.pageview(window.location.pathname)
}

const logEvent = (category = "", action = "") => {
	if(category && action) {
		ReactGA.event({ category, action })
	}
}

const logException = (description = "", fatal = false) => {
	if(description) {
		ReactGA.exception({ description, fatal })
	}
}

export { logException, logEvent, logPageView, initGA }
