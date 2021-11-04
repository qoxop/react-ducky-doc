/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Redux Hooks Api Hacks',
    image: '/img/p1.png',
    description: (
      <>
        为了帮助那些暂时升级不了 <code>react-redux</code> 的项目使用上 Hook 写法，而实现了一套接口和表现行为与 <code>react-redux</code> 一致的 Hook API。
      </>
    ),
  },
  {
    title: '快捷简单的 Redux 数据建模',
    image: '/img/p2.png',
    description: (
      <>
        使用 <code>createModel</code> 方法，将你的<code>StateType</code>、<code>reducer</code>、<code>actions</code> 等组织在了一切。
        避免你的 <code>Redux</code> 代码变得臃肿。
      </>
    ),
  },
  {
    title: '使用 Class+Hook 编写 Controller',
    image: '/img/p3.png',
    description: (
      <>
        面对复杂组件，class 写法让你的业务代码分割在各个生命周期，而使用 hooks 方式则容易出现作用域变量依赖问题且代码且代码噪音过多。
        <br />
        <code>Controller</code> Api 可以让你使用用 Class 组织代码，又可以用 hook 抽象业务逻辑。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
