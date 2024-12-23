'use client';
export function Tab({
  active = false,
  children
}) {
  return (
    (<div
      className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
        active ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600 hover:bg-blue-50'
      }`}>
      {children}
    </div>)
  );
}

export function Tabs({
  tabs,
  activeTab,
  onTabChange
}) {
  return (
    (<div className="flex gap-2 mb-12">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => onTabChange(tab)}>
          <Tab active={tab === activeTab}>{tab}</Tab>
        </button>
      ))}
    </div>)
  );
}

