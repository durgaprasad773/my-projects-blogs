import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const onClickTabId = () => {
    updateTabId(tabId)
  }

  const activeTabIdClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabIdClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
