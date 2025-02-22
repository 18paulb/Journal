import { NasaWidget } from "../app/components/widgets/nasa";

// FIXME: This is bad to just match direct strings, think of a better way
export function getWidgets(user, date) { 

    let user_widgets = user?.user_metadata?.widgets || []

    let widget_components = []
    for (let i = 0; i < user_widgets.length; ++i) {
        let widget_id = user_widgets[i]
        if (widget_id === "NASA_IMAGE_OF_THE_DAY") {
            widget_components.push({
                component: NasaWidget,
                props: { date: date }
            });
        }
    }

    return widget_components
}