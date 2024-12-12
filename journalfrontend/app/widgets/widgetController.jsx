import { NasaWidget } from "./nasa";

// FIXME: This is bad to just match direct strings, think of a better way
export function getWidgets(user, date) { 
    // Hard Code for now, figure out a better solution
    let user_widgets = user?.user_metadata?.widgets || []

    console.log(user_widgets)

    let widget_components = []
    for (let i = 0; i < user_widgets.length; ++i) {
        let widget_id = user_widgets[i]
        if (widget_id === "NASA_IMAGE_OF_THE_DAY") {
            widget_components.push({
                component: NasaWidget,
                props: { date: date } // Example prop
            });
        }
    }

    console.log(widget_components)

    return widget_components
}