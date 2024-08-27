package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.QucandianEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.QucandianView;


/**
 * 取餐点
 *
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
public interface QucandianService extends IService<QucandianEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<QucandianView> selectListView(Wrapper<QucandianEntity> wrapper);
   	
   	QucandianView selectView(@Param("ew") Wrapper<QucandianEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<QucandianEntity> wrapper);
   	

}

