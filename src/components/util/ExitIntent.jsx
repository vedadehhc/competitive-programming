import throttle from "lodash/throttle"

export default function ExitIntent(options = {}) {
  const defaultOptions = {
    threshold: 20,
    maxDisplays: 1,
    eventThrottle: 200,
    onExitIntent: () => {},
  }

  return (function() {
    const config = { ...defaultOptions, ...options }
    const eventListeners = new Map()
    let displays = 0
    let previousY = -1;

    const addEvent = (eventName, callback) => {
      document.addEventListener(eventName, callback, false)
      eventListeners.set(`document:${eventName}`, { eventName, callback })
    }

    const addWindowEvent = (eventName, callback) => {
      window.addEventListener(eventName, callback, false);
      eventListeners.set(`window:${eventName}`, { eventName, callback })
    }

    const removeEvent = key => {
      const { eventName, callback } = eventListeners.get(key)
      document.removeEventListener(eventName, callback)
      window.removeEventListener(eventName, callback)
      eventListeners.delete(key)
    }

    const shouldDisplay = position => {
      if (position <= config.threshold && displays < config.maxDisplays && previousY > position) {
        displays++;
        // console.log(displays);
        return true;
      }
      return false;
    }

    const mouseDidMove = event => {
      if (shouldDisplay(event.clientY)) {
        config.onExitIntent()
        if (displays >= config.maxDisplays) {
          removeEvents()
        }
      }
      previousY = event.clientY;
    }

    const removeEvents = () => {
      eventListeners.forEach((value, key, map) => removeEvent(key))
    }
    
    const resetY = () => {
      previousY = -Infinity;
    }

    addEvent("mousemove", throttle(mouseDidMove, config.eventThrottle));
    addWindowEvent("focus", throttle(resetY, config.eventThrottle));

    return removeEvents
  })()
}