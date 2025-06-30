package com.example.JUnitDemo.repo.api.impl;


import com.example.JUnitDemo.repo.api.UmsUserRepository;
import cn.org.thinkcloud.repo.base.service.api.impl.BaseRepositoryImpl;
import org.apache.dubbo.config.annotation.DubboService;
import com.example.JUnitDemo.domain.UmsUser;
import com.example.JUnitDemo.repo.mapper.UmsUserMapper;

/**
 * @author : zhangqian9158@gmail.com
 */
@DubboService(version = "1.0.0")
public class UmsUserRepositoryImpl extends BaseRepositoryImpl<UmsUserMapper, UmsUser> implements UmsUserRepository {

}
