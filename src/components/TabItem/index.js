import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabIdClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabIdClass}`} onClick={onClickTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
