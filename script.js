const memberData = {
  'swarm-coordinator': {
    category: '管理调度',
    name: 'swarm-coordinator',
    role: '协调主管',
    description: '负责全局协调与任务调度，确保多角色协同一致、高效、稳定。',
    responsibilities: ['拆分复杂任务并安排执行顺序', '协调不同角色之间的依赖与节奏', '在并发过程中保持目标一致'],
    scenarios: ['多 Agent 并行项目', '跨工种交付推进', '临时变更下的重排调度'],
    value: '它让整个公司不像一群散兵，而像一套有节奏、有顺序、有主次的执行系统。'
  },
  planner: {
    category: '规划与质量',
    name: 'planner',
    role: '规划师',
    description: '负责需求分析与执行规划，将复杂目标转化为清晰可落地的行动路径。',
    responsibilities: ['识别目标、约束和验收标准', '输出任务分解与执行框架', '把模糊需求转成清晰行动方案'],
    scenarios: ['项目启动阶段', '复杂需求分析', '多步骤交付方案设计'],
    value: '它把复杂性前置消化，减少后面执行中的返工、走偏和沟通损耗。'
  },
  'code-reviewer': {
    category: '规划与质量',
    name: 'code-reviewer',
    role: '代码审查员',
    description: '从结构、规范与可维护性角度提升实现水准。',
    responsibilities: ['检查结构是否清晰', '发现潜在维护风险', '提出更稳妥的改进建议'],
    scenarios: ['功能开发后的复查', '代码规范统一', '上线前工程质量检查'],
    value: '它是技术质量的第二道门，防止“能跑但不好维护”的实现直接流入交付。'
  },
  'security-reviewer': {
    category: '规划与质量',
    name: 'security-reviewer',
    role: '安全审查员',
    description: '识别安全风险与权限边界，确保系统方案足够稳健。',
    responsibilities: ['审查权限边界和暴露面', '识别潜在注入与泄露风险', '给出更安全的实现建议'],
    scenarios: ['外部接口接入', '敏感数据处理', '部署前风险体检'],
    value: '它确保系统不是只顾效率，还守得住底线。'
  },
  'tdd-guide': {
    category: '规划与质量',
    name: 'tdd-guide',
    role: '测试教练',
    description: '设计测试策略与验证路径，让实现从一开始就具备可验证性。',
    responsibilities: ['制定验证策略', '明确测试边界与关键路径', '帮助实现具备可回归性'],
    scenarios: ['需求刚落地时', '复杂逻辑上线前', '回归测试体系建设'],
    value: '它让团队不是靠感觉验收，而是靠明确的验证逻辑说话。'
  },
  'qa-auditor': {
    category: '规划与质量',
    name: 'qa-auditor',
    role: '最终质检员',
    description: '对结果完整性、准确性与一致性进行最终把关。',
    responsibilities: ['检查结果是否完整', '比对交付与原需求是否一致', '发现遗漏与细节问题'],
    scenarios: ['最终交付前', '多子任务汇总后', '关键结果复核'],
    value: '它让最终交到老板手里的，不是拼起来的半成品，而是过检的成品。'
  },
  'delivery-manager': {
    category: '规划与质量',
    name: 'delivery-manager',
    role: '交付经理',
    description: '将分散产出整理为可直接使用的最终版本。',
    responsibilities: ['汇总多角色输出', '整理成统一表达与结构', '保证最终材料可读可用'],
    scenarios: ['报告交付', '项目总结', '对老板的最终呈现'],
    value: '它把零散成果变成真正能拿去决策、汇报、执行的成品。'
  },
  'code-executor': {
    category: '一线执行',
    name: 'code-executor',
    role: '编码工程师',
    description: '负责功能实现与工程落地，把需求快速转化为可运行成果。',
    responsibilities: ['实现页面和功能', '处理前端或工程细节', '把方案真正落地运行'],
    scenarios: ['网页开发', '功能落地', '静态站点改版'],
    value: '它是把想法变成真实结果的主力执行位。'
  },
  'browser-operator': {
    category: '一线执行',
    name: 'browser-operator',
    role: '网页操作员',
    description: '负责网页交互与浏览器自动化执行，完成面向界面的操作与验证。',
    responsibilities: ['执行界面操作', '验证页面交互是否正常', '记录界面流程问题'],
    scenarios: ['网页流程验证', '表单提交流程', '需要浏览器自动化的任务'],
    value: '它能真正站到界面前，代替人工点、看、验证。'
  },
  'bitable-operator': {
    category: '一线执行',
    name: 'bitable-operator',
    role: '多维表格操作员',
    description: '负责多维表格的数据结构、记录维护与流程化管理。',
    responsibilities: ['设计表结构', '维护字段与记录', '支持流程化数据管理'],
    scenarios: ['业务台账', '流程跟踪', '结构化数据录入'],
    value: '它把零散业务数据收进统一结构，方便后续协同和追踪。'
  },
  'message-operator': {
    category: '一线执行',
    name: 'message-operator',
    role: '消息执行员',
    description: '负责消息触达、通知编排与沟通链路执行。',
    responsibilities: ['发送通知与提醒', '组织沟通链路节奏', '确保关键消息被送达'],
    scenarios: ['项目通知', '状态同步', '外部消息触达'],
    value: '它让信息流动起来，减少因为消息断点导致的执行卡顿。'
  },
  researcher: {
    category: '一线执行',
    name: 'researcher',
    role: '研究员',
    description: '负责资料调研、信息提炼与内容支撑，为决策提供高质量输入。',
    responsibilities: ['搜索并筛选资料', '交叉验证关键信息', '提炼结论与洞察'],
    scenarios: ['行业调研', '竞品分析', '方案前置研究'],
    value: '它为决策和执行提供可靠输入，避免后续建立在虚空上。'
  },
  'feishu-calendar': {
    category: '飞书协作',
    name: 'feishu-calendar',
    role: '日程管理员',
    description: '负责日程管理、会议编排与时间协调，让协作更精准有序。',
    responsibilities: ['创建和调整日程', '查询忙闲状态', '协调会议参与安排'],
    scenarios: ['会议安排', '多人时间协调', '日程维护'],
    value: '它让时间维度的协作更精准，不靠人工来回确认。'
  },
  'feishu-doc': {
    category: '飞书协作',
    name: 'feishu-doc',
    role: '文档管理员',
    description: '负责文档创建、更新与结构化沉淀，确保知识持续可用。',
    responsibilities: ['创建和更新文档', '整理知识结构', '沉淀长期可复用内容'],
    scenarios: ['文档沉淀', '方案归档', '知识库维护'],
    value: '它保证组织经验能留下来，而不是只存在一次性对话里。'
  },
  'docs-lookup': {
    category: '飞书协作',
    name: 'docs-lookup',
    role: '资料研究员',
    description: '快速从信息库中提取关键依据与上下文。',
    responsibilities: ['检索内部文档线索', '抓取关键上下文', '辅助快速定位资料'],
    scenarios: ['查历史方案', '找上下文依据', '知识库快速回溯'],
    value: '它缩短找资料的时间，让已有知识真正变成可调用资产。'
  }
};

const modalLayer = document.getElementById('modalLayer');
const modals = document.querySelectorAll('.modal');
const openers = document.querySelectorAll('[data-open-modal]');
const closers = document.querySelectorAll('[data-close-modal]');
const filterChips = document.querySelectorAll('.filter-chip');
const teamCards = document.querySelectorAll('#teamModal .member');

const memberCategory = document.getElementById('memberCategory');
const memberName = document.getElementById('memberName');
const memberRole = document.getElementById('memberRole');
const memberDescription = document.getElementById('memberDescription');
const memberResponsibilities = document.getElementById('memberResponsibilities');
const memberScenarios = document.getElementById('memberScenarios');
const memberValue = document.getElementById('memberValue');

let activeModalId = null;
let lastTrigger = null;

function fillList(target, items) {
  if (!target) return;
  target.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function populateMemberModal(memberId) {
  const data = memberData[memberId];
  if (!data) return;

  memberCategory.textContent = data.category;
  memberName.textContent = data.name;
  memberRole.textContent = data.role;
  memberDescription.textContent = data.description;
  fillList(memberResponsibilities, data.responsibilities);
  fillList(memberScenarios, data.scenarios);
  memberValue.textContent = data.value;
}

function hideAllModals() {
  modals.forEach(modal => modal.classList.add('hidden'));
}

function openModal(modalId, trigger = null) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (modalId === 'memberModal' && trigger?.dataset.memberId) {
    populateMemberModal(trigger.dataset.memberId);
  }

  hideAllModals();
  modalLayer.classList.remove('hidden');
  modalLayer.setAttribute('aria-hidden', 'false');
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  activeModalId = modalId;
  lastTrigger = trigger;
}

function closeModal() {
  hideAllModals();
  modalLayer.classList.add('hidden');
  modalLayer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeModalId = null;
  if (lastTrigger) {
    lastTrigger.focus();
  }
}

openers.forEach(opener => {
  opener.addEventListener('click', () => {
    const modalId = opener.dataset.openModal;
    openModal(modalId, opener);
  });
});

closers.forEach(closer => {
  closer.addEventListener('click', closeModal);
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activeModalId) {
    closeModal();
  }
});

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    filterChips.forEach(item => item.classList.toggle('active', item === chip));
    teamCards.forEach(card => {
      const matched = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matched);
    });
  });
});
