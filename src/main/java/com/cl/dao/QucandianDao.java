package com.cl.dao;

import com.cl.entity.QucandianEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.QucandianView;


/**
 * 取餐点
 * 
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
public interface QucandianDao extends BaseMapper<QucandianEntity> {
	
	List<QucandianView> selectListView(@Param("ew") Wrapper<QucandianEntity> wrapper);

	List<QucandianView> selectListView(Pagination page,@Param("ew") Wrapper<QucandianEntity> wrapper);
	
	QucandianView selectView(@Param("ew") Wrapper<QucandianEntity> wrapper);
	

}
